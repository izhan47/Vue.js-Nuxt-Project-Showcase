<template>
<div class="watch-learn-detail-section">
  <div class="bg-img-watch-detail">
    <div class="custom-container text-center">
      <img class="img-fluid img-height" src="/images/WatchLearn/pic-2.jpg" alt="">
    </div>
  </div>
  <div class="watch-detail-custom-container custom-margin">
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <div class="watch-card">
          <img src="/images/WatchLearn/nicole.jpg" alt="">
          <h2>Nicole McCray</h2>
          <p>Nicole is a die-hard animal lover who has worked in pet care for years. She is a former vet technician, a dog mom to her two rescue pups, and she grew up living and working at her family's pet boarding facility. She loves using her writing talents to share the insight she's learned throughout her career in the hopes that her knowledge can help other pet parents out there!</p>
          <v-btn large class="round-btn" outlined rounded > {{ $t('personal_website') }}</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="9" sm="12">
        <div class="tag">
          <v-icon color="#00afaa">mdi-tag</v-icon>
          <span>Play Time and Enrichment</span>
        </div>
        <div class="heading mt-2">
          <h1>  Exercises and Activities to Keep Your Pup Fit </h1>
        </div>
          <v-btn color="#ff8189" class=" ma-2 white--text" rounded>
            <v-icon left dark>mdi-facebook</v-icon>
            FACEBOOK
          </v-btn>
          <v-btn color="#ff8189" class="ma-2 white--text" rounded>
            <v-icon left dark>mdi-twitter</v-icon>
            TWITTER
          </v-btn>
          <v-btn color="#ff8189" class="ma-2 white--text" rounded>
            <v-icon left dark>mdi-linkedin</v-icon>
            LINKEDIN
          </v-btn>


        <p class="description space mt-5">Most dogs love physical activity, and exercise is just as important for their mental and physical health as it is for ours. Staying active will help your dog live a longer, happier life and prevent obesity, which is a common issue for dogs. Not only that but
         <b>dogs who are bored and don’t get enough exercise often develop behavior issues. </b>
          Here’s a look at some fun exercises and activities to keep your pup fit and how to know if he’s getting enough exercise each day.</p>

        <h2 class="img-heading mb-4">Ways to Keep Your Dog Fit:</h2>
        <img src="/images/WatchLearn/dog-water.jpeg" alt="">
        <p class="description space">Taking your dog for an evening walk is a great place to start, and that might be all your dog needs if he’s a senior with lower exercise needs. But keep in mind that even the most dedicated couch potato will appreciate some variety every now and then! Here are some fun exercises and activities to incorporate into your pup’s regular routine.</p>

        <h3 class="heading-description">Cycling</h3>
        <p class="description space">Cycling is a fun way to <b class="green-description">exercise with your dog</b>, especially if you have a bike path nearby where you can get away from dangerous traffic. Puppies shouldn’t run until their joints are developed, but many adult dogs will love to run alongside their owners while they ride, especially if they’re high energy. Of course, if your dog is a senior or has joint issues, this probably isn’t the activity for him.</p>

        <h3 class="heading-description">Swimming</h3>
        <p class="description space">If there’s one thing many dogs love more than going for a walk, it’s swimming. Dogs love the water and it’s a fantastic way to burn off some of that pent-up energy when the weather is hot. It’s also a low impact, so it’s safe for dogs with joint issues. A doggie life vest eliminates any worry of your dog staying afloat if you’re not sure about his swimming abilities.</p>

        <hr class="new3">

        <div class="comment-section">
          <h2 class="comment-section-heading text-center space">Comments</h2>
          <h2 class="comment-section-heading text-center mb-5">Leave  A Comment</h2>
          <v-textarea
            outlined
            name="input-7-4"
            label="Message"
            value=""
          ></v-textarea>
          <div class="text-center">
            <v-btn large class=" submit-btn white-text" outlined rounded > {{ $t('submit') }}</v-btn>

          </div>
        </div>


      </v-col>
    </v-row>
  </div>
  <!--  card-section-start   -->
  <div class="custom-container  space">
    <div class="text-center">
      <h1 class="card-section-title">Related Topics</h1>
    </div>

    <v-row>
      <v-col cols="12" md="4" sm="12" v-for="(item,i) in cards" :key="i" class="custom-margin">
        <v-img
          class="img-fluid card-img"
          :src="item.src"
        ></v-img>
        <v-card  class="card-radius card-custom-height card-padding ">
          <v-card-title class="card-title-padding">
            <div class="card-heading">
              <h2>  {{ item.name}}</h2>
            </div>
          </v-card-title>
          <v-card-text>
            <p class="card-description">{{item.description.length < 50 ? item.description : item.description.slice(0, 50) }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <!--  card-section-end   -->
</div>
</template>

<script>
export default {
  name: "index.vue",
  data(){
    return{
      cards:[
        {
          src:"/images/WatchLearn/pic-2.jpg",
          name:"After Their Service",
          description:"Pet Adoption",
        },
        {
          src:"/images/WatchLearn/pic-1.jpg",
          name:"Exercises and Activities to Keep Your Pup Fit",
          description:"Play Time and Enrichment",
        },
        {
          src:"/images/WatchLearn/pic-3.jpg",
          name:"4 Steps to Take After Bringing Home Your New Pup",
          description:"Pet Adoption",
        },


      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";
.bg-img-watch-detail{
  background-color: transparent;
  background-image: linear-gradient( 180deg, $black 0%, rgba(0,0,0,0) 100%);
  opacity: 0.5;
  transition: background 0.3s,
  border-radius 0.3s, opacity 0.3s;
}
.img-height{
  max-height: 500px;
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
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
    text-transform: capitalize;
    margin-bottom: 15px;
  }
  p{
    color: $black;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 13px;
    line-height: 1.7em;
  }
}
.tag{
  span{
    color: $green;
    font-size: 15px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
  }
}
.heading{
  margin-bottom: 20px;
  h1{
    font-size: 40px;
    font-weight: 600;
    text-shadow: -3px 2px 5px rgb(0 0 0 / 9%);
  }
}
.social-btn::v-deep .v-btn__content{
  font-family: 'Nunito Sans', sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}
.description{
  line-height: 2em;
  font-weight: 500;
}
.img-heading{
  color:$purple;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 30px;
  text-shadow: -3px 2px 5px rgba(0, 0, 0, 0.09);
}
.heading-description{
  color: $purple;
  font-size: 1.5625rem;
  font-weight: 500;
  text-shadow: -3px 2px 5px rgb(0 0 0 / 9%);
  line-height: 1.4;
}
.green-description{
  color: $green;
}

.comment-section{
  padding-top: 5rem;
}
.comment-section-heading{
  color: #270089;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 45px;
  font-weight: 600;
  text-transform: capitalize;
}

.submit-btn::v-deep.v-btn{
  min-width: 140px;
  height: 52px;
  padding: 0 75px 0 75px;
  text-transform: capitalize;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: unset;
  background-color: #270089;
}
.round-btn{
  border-style: solid;
  border-width: 2px 2px 2px 2px;
}





/* Dotted red border */
hr.new3 {
  border-top: 1px dotted $black;
}

.card-section-title{
  font-family: 'Nunito Sans', sans-serif;
  font-size: 50px;
  font-weight: 600;
  text-shadow: -3px 2px 5px rgb(0 0 0 / 9%);
  text-transform: capitalize;
  color: $purple;
  margin-top: 6rem;

}
.watch-learn-detail-section{
  .card-radius{
    border-radius: 15px;
    box-shadow: -5px 10px 10px 0px rgb(0 0 0 / 9%);
  }
}
.card-custom-height{
  min-height: 250px;
}
.card-heading{
  h2{
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
}
.card-description{
  font-family: 'Nunito Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
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
