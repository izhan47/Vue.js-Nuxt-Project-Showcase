<template>
<div class="watch-learn-detail-section" v-if="categoryData">
<!--  <div class="bg-img-watch-detail">-->
<!--    <div class="custom-container align-center">-->
<!--      <img class="img-fluid img-height" :src="categoryData.thumbnail_thumb_full_path" alt="">-->
<!--    </div>-->
<!--  </div>-->
  <div class="watch-detail-custom-container custom-margin">
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <div class="watch-card"  v-if="categoryData.author">
          <img :src="categoryData.author.image_thumb_full_path" alt="">
          <h2>{{categoryData.author.name}}</h2>
          <p>{{categoryData.author.about}}</p>
          <v-btn large class="round-btn" outlined rounded > {{ $t('personal_website') }}</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="9" sm="12">
<!--        <div class="tag">-->
<!--          <v-icon color="#00afaa">mdi-tag</v-icon>-->
<!--          <span>Play Time and Enrichment</span>-->
<!--        </div>-->
        <div class="heading mt-2">
          <h1>{{categoryData.title }} </h1>
        </div>
          <v-btn color="#ff8189" class=" ma-2 white--text" rounded>
            <v-icon left dark>mdi-facebook</v-icon>
            {{ $t('facebook')}}
          </v-btn>
          <v-btn color="#ff8189" class=" ma-2 white--text" rounded>
            <v-icon left dark>mdi-twitter</v-icon>
            {{ $t('twitter')}}
          </v-btn>
          <v-btn color="#ff8189" class="ma-2 white--text" rounded>
            <v-icon left dark>mdi-linkedin</v-icon>
            {{ $t('linkedin')}}
          </v-btn>
        <div v-html="categoryData.description"></div>
<!--        <hr class="dot-line">-->
        <!-- Comment Section -->
        <div class="comment-section">
          <!-- Comments List -->
          <h2 class="comment-section-heading text-center space">{{ $t('comments')}}</h2>
          <div class="reviews-details-block" v-if="commentData.length">
            <div v-for="(comment,index) in commentData" :key="index" >
              <div class="reviews-details-list-main">
                <div class="reviews-details-list" >
                  <div class="clearfix">
                    <div class="reviews-use-pic space">
                      <v-img v-if="comment.user && comment.user.profile_image_thumb_full_path"  :src="comment.user.profile_image_thumb_full_path"></v-img>
                      <img v-else src="/images/placeholder.png" alt="">
                    </div>
                  </div>
                  <div class="reviews-details">
                    <div  v-if="userDetail && userDetail.id === comment.user.id" class="delete-icon" @click="deleteComment(comment.id)">
                      <v-icon>mdi-delete</v-icon>
                    </div>
                    <div class="reviews-star-details">
                      <p class=" rate-text user-name">{{comment.name}}</p>
                      <p class="date-text">{{comment.formated_created_at}}</p>
                    </div>
                    <p class="comments-text">{{ comment.message }}</p>
                  </div>
                </div>
                <!-- add a reply comment  -->
                <span class="reply-comment " @click="activeReply === -1 ? activeReply = index : activeReply = -1">{{$t('reply')}}</span>
                <v-form ref="replyForm" class="mt-4" v-if="activeReply===index">
                  <v-textarea outlined :label="$t('comment')" v-model="form.message"  required :rules="rules.message"></v-textarea>
                  <div class="text-center">
                    <v-btn large class="  submit-btn"  outlined rounded @click="submit(comment.id)"> {{ $t('reply') }}</v-btn>
                  </div>
                </v-form>
              </div>
              <!--  reply comment List -->
              <div v-if="comment.children && comment.children.length">
                <div class="reviews-details-list-main custom-reply-ml"   v-for="item in comment.children" >
                  <div class="reviews-details-list ">
                    <div class="clearfix">
                      <div class="reviews-use-pic space">
                        <v-img v-if="item.user && item.user.profile_image_thumb_full_path"  :src="item.user.profile_image_thumb_full_path"></v-img>
                        <img v-else src="/images/placeholder.png" alt="">
                      </div>
                    </div>
                    <div class="reviews-details">
                      <div class="reviews-star-details">
                        <p class=" rate-text user-name">{{item.name}}</p>
                        <p class="date-text">{{item.formated_created_at}}</p>
                      </div>
                      <p class="comments-text">{{ item.message }}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div v-else class="reviews-details-block custom-container text-center">{{$t('no_comments_found')}}</div>
          <!-- Add a Comment Section -->
          <h2 class="comment-section-heading text-center mb-5">{{ $t('leave_a_comment')}}</h2>
          <v-form ref="form">
            <v-textarea outlined :label="$t('comment')" v-model="form.message" :rules="rules.message" required></v-textarea>
            <div class="text-center">
              <v-btn large class=" submit-btn" outlined rounded @click="submit(form.parent_comment_id)"> {{ $t('submit') }}</v-btn>
            </div>
          </v-form>
        </div>
        <!-- End Comment Section -->

      </v-col>
    </v-row>
  </div>
  <!--  card-section-start   -->
  <div class="custom-container  space">
    <div class="text-center">
      <h1 class="card-section-title">{{ $t('related_topics')}}</h1>
    </div>

    <v-row>
      <v-col cols="12" md="4" sm="12" v-for="(data,i) in watchCategoryData.slice(0,3)" :key="i" class="custom-margin">
        <watch-category-card :item="data"></watch-category-card>
      </v-col>
    </v-row>
  </div>
  <!--  card-section-end   -->
</div>
</template>

<script>
import WatchCategoryCard from "@/components/WatchCategoryCard";

export default {
  name: "index.vue",
  components:{WatchCategoryCard},
  data(){
    return{
      form:{
        message:'',
        parent_comment_id:0,
        slug:''
      },
      rules: {
        message: [val => (val || '').length > 0 || 'This message field is required'],
      },
      activeReply:-1,
      categoryData:'',
      commentData:'',
    }
  },
  computed:{
    URL(){
      return this.$route.params.slug
    },
    watchCategoryData(){
      return this.$store.state.category_list
    }
  },
  created() {
    this.getCategoryDetail()
    this.getComments()
    this.userDetail=this.$store.state.user.user
  },
  methods:{
     async getCategoryDetail(){
         await this.$store.dispatch('singleCategoryDetail',this.URL).then( response => {
            this.categoryData = response.data.data.watch_and_learn
            this.$store.commit('SHOW_LOADER', false)
          })
        },
     async getComments(){
       await this.$store.dispatch('getComment',this.URL).then( response => {
            this.commentData=response.data.data.comments
            this.$store.commit('SHOW_LOADER', false)
          })
     },
     async deleteComment(id){
       if (!this.$store.state.user.isAuthenticated) {
         this.$store.commit('SET_CURRENT_PATH',this.$route.path)
         return this.$router.push('/auth/Login')
       }
       else {
         let data = {
           slug: this.URL,
           id: id
         }
         this.$store.commit('SHOW_LOADER', true)
         await this.$store.dispatch('deleteComment', data).then(response => {
           this.$store.commit('SHOW_LOADER', false)
           this.$store.commit('SHOW_SNACKBAR', {snackbar: true, color: 'green', message: response.data.message})
          this.getComments()
         })
       }

        },
     async submit(id){
      if (!this.$store.state.user.isAuthenticated) {
        this.$store.commit('SET_CURRENT_PATH',this.$route.path)
        return this.$router.push('/auth/Login')
      }
      else{
        if(id === 0 ? this.$refs.form.validate() : this.$refs.replyForm[0].validate()) {
          let loader=true
          this.$store.commit('SHOW_LOADER', loader)
          this.form.slug=this.categoryData.slug
          this.form.parent_comment_id = id
          await this.$store.dispatch('comment',this.form).then(response => {
            this.$store.commit('SHOW_LOADER', loader=false)
            this.$store.commit('SHOW_SNACKBAR', {snackbar:true, color:'green', message:response.data.message
            })
          })
          this.activeReply=-1
          this.form.message=''
          await this.getComments();
        }

      }
    }

  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.bg-img-watch-detail{
  background-color: transparent;
  background-image: linear-gradient( 180deg, $black 0%, rgba(0,0,0,0) 100%);
  transition: background 0.3s,
  border-radius 0.3s, opacity 0.3s;
}
.align-center{
  text-align: center;
}
.img-height{
  max-height: $img-max-height-500;
}
.watch-detail-custom-container{
  max-width: 1250px;
  margin: auto;
  padding: 0 1rem;
}
.custom-margin{
  margin-top: 3rem;
}
.watch-card{
  img{
    width: 85px;
    height: 85px;
    border-radius: 100px;
  }
  h2{
    color:$purple;
    font-family: $font-family-primary;
    font-weight:$font-weight-600;
    font-size: $font-size-18;
    text-shadow: -3px 2px 5px $text-shadow-primary;
    text-transform: $text-transform-capitalize;
    margin-bottom: 15px;
  }
  p{
    color: $black;
    font-family: $font-family-primary;
    font-weight:$font-weight-600;
    font-size: $font-size-13;
    line-height: 1.7em;
    max-width: 250px;
  }
}
.tag{
  span{
    color: $green;
    font-size:$font-size-15;
    font-family: $font-family-primary;
    font-weight:$font-weight-600;
  }
}
.heading{
  margin-bottom: 20px;
  h1{
    font-size: $font-size-40;
    font-weight:$font-weight-600;
    text-shadow: -3px 2px 5px $text-shadow-primary;
  }
}
.social-btn::v-deep .v-btn__content{
  font-family: $font-family-primary;
  font-size: $font-size-10;
  font-weight:$font-weight-600;
  text-transform: $text-transform-uppercase;
}
.description{
  line-height: 2em;
  font-weight: $font-weight-500;
}
.img-heading{
  color:$purple;
  font-family: $font-family-primary;
  font-weight: $font-weight-300;
  font-size: $font-size-30;
  text-shadow: -3px 2px 5px $text-shadow-primary;
}
.heading-description{
  color: $purple;
  font-size: 1.5625rem;
  font-weight: $font-weight-500;
  text-shadow: -3px 2px 5px $text-shadow-primary;
  line-height: 1.4;
}
.green-description{
  color: $green;
}

.comment-section{
  padding-top: 5rem;
}
.comment-section-heading{
  color: $blue;
  font-family: $font-family-primary;
  font-size: $font-size-45;
  font-weight:$font-weight-600;
  text-transform: $text-transform-capitalize;
}

.submit-btn::v-deep.v-btn{
  min-width: 140px;
  height: 52px;
  padding: 0 75px 0 75px;
  text-transform: $text-transform-capitalize;
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight:$font-weight-600;
  letter-spacing: unset;
  background-color: $purple;
  color: $white;
}
.round-btn{
  border-style: solid;
  border-width: 2px 2px 2px 2px;
}
/* Dotted red border */
hr.dot-line {
  border-top: 1px dotted $black;
}

.card-section-title{
  font-family: $font-family-primary;
  font-size: $font-size-50;
  font-weight:$font-weight-600;
  text-shadow: -3px 2px 5px $text-shadow-primary;
  text-transform: $text-transform-capitalize;
  color: $purple;
  margin-top: 6rem;

}
.watch-learn-detail-section{
  .card-radius{
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px $text-shadow-primary;
  }
}
.card-custom-height{
  min-height: 250px;
}
.card-heading{
  h2{
    font-family: $font-family-primary;
    font-size: $font-size-24;
    font-weight: $font-weight-bold;
  }
}
.card-description{
  font-family: $font-family-primary;
  font-size: $font-size-15;
  font-weight: $font-weight-500;
}
.card-img {
  min-height: 285px;
}

.card-title-padding::v-deep.v-card__title{
  padding: 16px 0 0 16px;
}
.card-padding{
  padding: 24px;
  @media (max-width: 767px) {
    padding: 0 0 8px 0;
  }
}
</style>
