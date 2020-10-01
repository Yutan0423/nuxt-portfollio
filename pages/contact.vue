<template>
  <div class="container">
    <div class="main-image">
      <h2 class="main-title">CONTACT</h2>
      <img class="main-visual" src="~/assets/image/contact-image.jpg">
    </div>
    <div class="content-inner">
        <form class="contact-form" action="/">
            <div class="form-inner">
                <label class="form-title" for="name">Name</label>
                <input class="form-text" id="name" type="text">
                <label class="form-title" for="email">Email</label>
                <input class="form-text" id="email" type="text">
                <label class="form-title" for="message">Message</label>
                <textarea class="form-text" id="message" cols="30" rows="10"></textarea>
                <button class="form-button">Send Message</button>
            </div>
        </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-image {
  position: relative;
}
.main-title {
  font-size: 24px;
  position: absolute;;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-visual {
  background-repeat:  no-repeat;
  width: 100%;
  height: auto;
}
.content-inner {
  max-width: 990px;
  padding: 0 60px;
  margin: 0 auto;
}
.form-inner {
    text-align: center;
    .form-title {
        display: block;
        text-align: left;
        width: 80%;
        margin: 0 auto 8px;
    }
    .form-title:first-of-type {
            margin-top: 48px;
    }
    .form-text {
    width: 80%;
    max-width: 80%;
    margin-bottom: 24px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #eaedf2;
    font-size: 20px;
    padding: 8px 16px;
    }
    .form-button {
        width: 80%;
        height: 48px; 
        margin-bottom: 64px;
        border-radius: 6px;
        font-size: 24px;
        background-color:  #DEB732;
        color: #fff;
        border: none;
    }
}
@media screen and (max-width: 768px) {
    .main-title {
        font-size: 14px;
    }
    .content-inner {
        padding: 0 30px;
    } 
    .form-inner{
         .form-title {
            font-size: 14px;
        }
        .form-text {
            font-size: 13px;
            padding: 4px 8px;
        }
        .form-button {
            font-size: 16px;
        }
    }
}

</style>