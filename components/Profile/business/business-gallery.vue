<template>
  <ContentContainer @cancel="cancel" @save="save" :disable-save="disableSave">
    <input
      type="file"
      class="d-none"
      @change="getMedia"
      ref="fileInput"
      multiple
      accept="image/x-png,image/gif,image/jpeg"
    />
    <div
      class="gallery-container"
      @click="$refs.fileInput.click()"
      v-if="!images.length"
    >
      <div>
        <img src="/images/svg/file-uploader.svg" class="img-fluid" alt="" />

        <v-btn plain outlined rounded x-large class="my-5 w-100"
          >Choose File</v-btn
        >

        <v-btn text rounded color="rgb(70, 37, 154)" class="w-100 bold"
          >Or drop files here</v-btn
        >
      </div>
    </div>

    <div class="images-container" v-else>
      <div class="image" v-for="img in images" :key="img.id">
        <img :src="img.url" class="img-fluid" alt="" />

        <p class="name bold">{{ img.name }}</p>
        <v-btn fab x-small class="close-btn" @click="removeImage(img.id)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <div class="image-uploader" @click="$refs.fileInput.click()">
        <div>
          <v-btn plain text fab x-small class="close-btn">
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <p>Upload More</p>
        </div>
      </div>
    </div>
  </ContentContainer>
</template>

<script>
import ContentContainer from "~/components/Profile/content-container";

export default {
  name: "services",
  components: { ContentContainer },
  data: () => ({
    files: [],
    images: []
  }),
  computed: {
    disableSave() {
      return this.files.length === 0;
    }
  },
  methods: {
    save() {
      const row = this.files.map(f => {
        return {
          image: f.file,
          cropped_image: ""
        };
      });

      this.$emit("next-tab", {
        row: [
          {
            image: "",
            cropped_image: ""
          },
          ...row
        ]
      });
    },
    cancel() {
      this.$emit("skip-step");
    },
    removeImage(id) {
      this.files = this.files.filter(file => file.id !== id);
      this.images = this.images.filter(image => image.id !== id);
    },
    getMedia(event) {
      const files = event.target.files;

      for (let file of files) {
        let url = URL.createObjectURL(file);
        const id = Date.now() + Math.random();
        this.images.push({ url, id, name: file.name });
        this.files.push({ file, id });
      }

      this.$refs.fileInput.value = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery-container {
  min-height: 400px;
  border-radius: 4px;
  border: 2px dashed #eee;
  display: grid;
  place-items: center;
  margin-bottom: 2rem;
  cursor: pointer;

  > div {
    max-width: 80%;
    text-align: center;
  }
}

.images-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 1.5rem;

  .image {
    position: relative;
    img {
      max-width: 100%;
      border-radius: 8px;
    }

    .close-btn {
      position: absolute;
      top: -7px;
      right: -12px;
    }
  }

  .image-uploader {
    border: 1px dashed #bbbaba;
    height: 200px;
    display: grid;
    place-items: center;
    text-align: center;

    p {
      color: #bbbaba;
    }
  }
}
</style>
