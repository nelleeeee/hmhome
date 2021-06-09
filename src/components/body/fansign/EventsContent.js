import React from "react";
import styled from "styled-components";

function EventsContent() {
  return (
    <EventsContentContainer>
      <EventsContentImage src="https://img.hankyung.com/photo/201911/2019111515332948327-540x360.jpg"></EventsContentImage>
      <EventsContentTitle>
        韓国MAKESTAR【WEi《IDENTITY :
        Action》/6月19日20:30】メンバー別ビデオ通話サイン会
      </EventsContentTitle>
      <EventsContentDetail>
        <EventsContentDetailInfo>
          代行応募期間：6月8日 12時までにご入金完了
          <br />
          当選発表：6月9日17時以降　
          <br />
          {/* <br /> */}
          🙂 当選者発表ページ 🙂 及び当選者に個別連絡
          <br />
          当選人数：各メンバー10名
          <br />
          ビデオサイン会使用アプリ：カカオトーク/LINE/WeChat
          <br />
          CD価格:2300円
          <br />
          開催店舗：MAKESTAR *
          <br />
          テレビ電話イベント：各メンバーに複数応募および複数当選可能
          <br />
          (同じメンバーに複数当選した場合、1回のみ参加可)
          <br />
        </EventsContentDetailInfo>
        <EventsContentDetailGift>
          特典
          <br />
          参加者全員
          <br />
          1) WEi未公開ホログラムフォトカードB Ver.
          <br />
          (アルバム1枚あたりランダム1枚、合計6種,
          前のイベントフォトカードと別バージョン)
        </EventsContentDetailGift>
        <EventsContentDetailCs>
          外国に滞在されている方の場合、配送代行地または他人の連絡先ではなく、必ずご本人の連絡先を国番号を含めてご記入ください。ご本人と繋がらない連絡先を記載したことによって発生した不利益に関しましては責任を負いかねません。
          <br />
          1.
          ご注文の際には注文情報に必ず応募者の本名、応募者のメールアドレスを記入してください。
          <br />
          (外国人の場合はパスポート基準の英文で作成し、ご連絡先に国番号も含めてご記入ください。)
          <br />
          2. 本イベントは会員情報ではなく、注文の際に記入されたイベント応募情報
          <br />
          (応募者のご氏名／電話番号 ／応募者のアプリ＆ID )
          <br />
          を基準に行われますので、予めご参照お願いします。
          <br />
          (外国人の場合はパスポートに記載されている英文名でご応募ください/
          Foreigners should apply under the English name on their passports.)
          <br />
          3.
          応募者の情報入力の際に注文件1件あたり1名の情報を入力してください。2人以上の情報を入力された場合は任意で1名の情報のみ選択および認めます。本内容を熟知していないことにより発生する問題に関しましては開催側は責任を負いかねません。
          <br />
          4.
          <br />
          カカオトークアプリを選択された場合はID欄にメールアドレスではなく、検索して登録ができるカカオトークIDを入力ください。
          <br />
          5.
          応募するアプリはIDで友達検索および追加がONに設定されているかを必ずご確認ください。提供していただいたアプリの情報で友達追加ができなかったり、登録できない場合に発生する問題に関しては責任を負いかねません。
        </EventsContentDetailCs>
        <EventsContentDetailPrice>
          韓国→東京経由での配送になります。
          <br />
          ＊CD送料＊
          <br />
          サインCDは無料
          <br />
          30枚まで22000円
          <br />
          60枚まで44000円
          <br />
          ※破棄、ご希望枚数のみお送りすることも可能です。
          <br />
          ＊外付特典のみ送料＊
          <br />
          10枚まで11000円
          <br />
          20枚まで22000円
          <br />
          後日の追加料金はありません。
          <br />
        </EventsContentDetailPrice>
        <EventsContentDetailHow>
          1.こちらからご希望枚数ご購入ください。
          <br />
          2.お支払い
          <br />
          3.お申し込み完了
          <br />
          4.当選発表
          <br />
          ※現在コロナウイルスの為ビデオ通話でのサイン会ですので当選発表はHPやTwitterでの発表となっております。
          <br />
          5.当選者サイン会参加
          <br />
          6.CD発送もしくは破棄
          <br />
          ※CD発送時期はサイン会終了後順次発送予定
        </EventsContentDetailHow>
      </EventsContentDetail>
    </EventsContentContainer>
  );
}

export default EventsContent;

const EventsContentContainer = styled.div`
  width: 70%;
  min-width: 650px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const EventsContentImage = styled.img`
  background-size: cover;
  width: 100%;
  margin-bottom: 20px;
`;

const EventsContentTitle = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 800;
`;

const EventsContentDetail = styled.div`
  margin-bottom: 20px;
`;

const EventsContentDetailInfo = styled.div`
  margin-bottom: 20px;
  br {
    margin-bottom: 3px;
  }
`;

const EventsContentDetailGift = styled.div`
  margin-bottom: 20px;
`;

const EventsContentDetailCs = styled.div`
  margin-bottom: 20px;
`;

const EventsContentDetailPrice = styled.div`
  margin-bottom: 20px;
`;

const EventsContentDetailHow = styled.div`
  margin-bottom: 20px;
`;
