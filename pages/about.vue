<template>
  <div class="container">
    <div class="main-image">
      <h2 class="main-title">ABOUT</h2>
      <img class="main-visual" src="~/assets/about-image.jpg">
    </div>
    <div class="content-inner">
      <section>
        <h3　class="content-title">自己紹介</h3>
        <dl class="info-list">
          <dt class="info-title">名前</dt>
          <dd class="info-detail">丹　佑太</dd>
        </dl>
        <dl class="info-list">
          <dt class="info-title">出身</dt>
          <dd class="info-detail">山形県（現在は東京都在住）</dd>
        </dl>
        <dl class="info-list">
          <dt class="info-title">学歴</dt>
          <dd class="info-detail">宮城教育大学情報・ものづくりコース</dd>
        </dl>
        <dl class="info-list">
          <dt class="info-title">活動</dt>
          <dd class="info-detail">2017年4月〜2020年3月まで小学校教員として３年間勤務しました。
            <br>
            1年目は外国語専科として英語の授業を担当し、2年目は第４学年の担任、
            <br>3年目は特別支援学級の担任として活動しておりました。
            <br>
            2020年3月に退職し、エンジニアとして就業するため6月に上京して今に至ります。
          </dd>
        </dl>
        <dl class="info-list">
          <dt class="info-title">趣味</dt>
          <dd class="info-detail">サッカー / 語学学習 / 読書 / 筋トレ</dd>
        </dl>
      </section>
      <section>
        <h3　class="content-title">これまでの経験・技術</h3>
          <ul>
            <li class="list-item">HTML/CSS/WordPress/Vue.js/Nuxt.js</li>
            <li class="list-item">英語の読み書き、英語を用いたコミュニケーション</li>  
          </ul>   
      </section>
      <section>
        <h3　class="content-title">資格</h3>
        <p>TOEIC710 / 中学校英語免許一種 / 小学校免許一種 / 普通自動車一種運転免許</p>
      </section>
      <section>
        <h3　class="content-title">自己PR</h3>
        <p class="pr-info">以下のことを自分の強みと捉え、仕事で生かすことができればと考えております。</p>
        <ul>
          <li class="list-item">新しい技術・情報への探究心</li>
          <li class="list-item__detail">これからのテクノロジーの変遷に強い興味があり、独学でプログラミングを学んできました。
            <br>また将来的にはグローバルな環境で視野を広くして働きたいという思いがあり、英語学習も継続しています。
          </li>
          <li class="list-item">社内における同僚とのコミュニケーション・報連相の徹底</li>
          <li class="list-item__detail">前職は大きい学校でしたので、児童のことや仕事内容についてこまめに他の先生方と連絡を取る必要がありました。
            <br>そのため、職場ではどんな些細なことでも連絡を取ることを意識し、常に同僚とのコミュニケーションやチームワークを大切にしておりました。
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 64px;
}
br {
  margin-bottom: 8px;
}
.main-image {
  position: relative;
}
.main-title {
  font-size: 24px;
  position:absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-visual {
  background-repeat:  no-repeat;
  width: 100%;
  height: auto;
}
section:first-of-type {
  margin-top: 48px;
}
.content-inner {
  max-width: 990px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
}
.content-title {
  margin-bottom: 16px;
}
.info-list {
  display: flex;
}
.info-title {
  width: 20%;
  text-align: center;
}
.info-detail {
  width: 80%;
  margin-bottom: 16px;
}
.list-item {
  margin-bottom: 16px;
}
.list-item__detail {
  list-style: none;
  margin-bottom: 30px;
}
.list-item__detail:first-of-type {
  margin-bottom: 32px;
}
.pr-info {
  margin-bottom: 16px;
}
@media screen and (max-width: 768px) {
    .main-title {
        font-size: 14px;
    }
    .content-inner {
        padding: 0 30px;
        .content-title {
          font-size: 14px;
          margin-bottom: 8px;
        }
        dt, dd, li, p {
          font-size: 12px;
        }
        .list-item {
          margin-bottom: 8px;
        }
    } 
}
</style>
