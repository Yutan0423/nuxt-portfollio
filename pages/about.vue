<template>
  <div class="container">
    <div class="main-image">
      <h2 class="main-title">ABOUT</h2>
      <img class="main-visual" src="~/assets/about-image.jpg">
    </div>
    <div class="content-inner">
      <section>
        <h3 class="content-title">自己紹介</h3>
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
            2020年3月に退職し、エンジニアとして就業するため6月に上京してJavaScriptとPHPの学習を行った後、現在の会社に就職をしました。
          </dd>
        </dl>
        <dl class="info-list">
          <dt class="info-title">趣味</dt>
          <dd class="info-detail">サッカー / 語学学習 / 読書 / 筋トレ / 海外旅行</dd>
        </dl>
      </section>
      <section>
        <h3 class="content-title">これまでの経験・技術</h3>
          <ul>
            <li class="list-item">JavaScript / PHP / React.js / Vue.js / Laravel/ Sass / Git / Linux</li>
            <li class="list-item">英語の読み書き、英語を用いたコミュニケーション</li>
          </ul>
      </section>
      <section>
        <h3 class="content-title">主な実績</h3>
          <h4>プログラミング受講システムの開発・改修<span>2021年1月〜2021年3月</span></h4>
          <p>自社で運営しているサービスをより顧客に満足していただけるよう、以下の業務を行いました。<br>
          使用スキル：Vue.js / Laravel / MySQL / Git</p>
          <div class="content-practice">
            <p class="practice-title">【テスト予約機能の実装】</p>
            <p class="practice-detail">　受講者がカリキュラム上の章を最後まで終えた際、予約画面からメンターとのテスト日時を設定できるような機能を実装しました。
              予約データをGoogleカレンダーに出力し、使用言語、章、テスト日時が視覚的に確認できるようにしました。</p>
          </div>
          <div class="content-practice">
            <p class="practice-title">【来社管理機能の改修（体温データ追加）】</p>
            <p class="practice-detail">　受講生や社員が来社された際のデータ入力画面に体温データを追加し、ペーパーレスで体温入力ができる機能を実装しました。</p>
          </div>
          <div class="content-practice">
            <p class="practice-title">【CSV出力機能の改修】</p>
            <p class="practice-detail">　受講生のログインデータや、来社データをCSVに出力できるような機能を実装しました。</p>
          </div>
          <div class="content-practice">
            <p class="practice-title">【バグ修正】</p>
            <p class="practice-detail">　データベースから取り出した受講言語の章の順番が、他の画面表示で正しく反映されないバグを修正しました。また、削除した章の名前が、カリキュラムページに表示されてしまうバグを修正しました。</p>
          </div>
      </section>
      <section>
        <h3 class="content-title">資格</h3>
        <p>TOEIC790 / 中学校英語免許一種 / 小学校免許一種 / 普通自動車一種運転免許</p>
      </section>
      <section>
        <h3 class="content-title">自己PR</h3>
        <p class="pr-info">以下のことを自分の強みと捉え、仕事で生かすことができればと考えております。</p>
        <ul>
          <li class="list-item">新しい技術・情報への探究心</li>
          <li class="list-item__detail">これからのテクノロジーの変遷に強い興味があり、独学でプログラミングを学んできました。
            <br>また将来的にはグローバルにも目を向けつつ、視野を広くして働きたいという思いがあり、英語学習も継続しています。
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
span {
  font-weight: normal;
  margin-left: 20px;
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
.content-practice {
  margin-bottom: 16px;
}
.practice-title {
  font-size: 18px;

  &:first-of-type {
    margin-top: 16px;
  }
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
