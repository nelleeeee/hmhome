import React from "react";
import styled from "styled-components";

function Faq() {
  return (
    <FaqContainer>
      <FaqTitle>よくあるご質問</FaqTitle>
      <FaqF>韓国語ができなくても大丈夫ですか？</FaqF>
      <FaqQ>日本語可能なスタッフもいますのでご安心ください。</FaqQ>
      <FaqF>気になることがある場合はどこに問い合わせればいいですか？</FaqF>
      <FaqQ>LINE＠にてお問い合わせください。</FaqQ>
      <FaqF>
        デザイン提案、写真/動画素材送って何日後にデザイン確認の連絡が来ますか?
        <br />
        早く作りたい時/ゆっくりでも大丈夫な時の違いはありますか?
      </FaqF>
      <FaqQ>
        デザインが画像の場合は12時までのデザイン提案を頂けましたらその日中に
        <br />
        デザインが動画の場合は12時までのデザイン提案を頂けましたらその次の日に
        <br />
        デザイン確認連絡をいたします。
        <br />
        早く作りたい時/ゆっくりでも大丈夫な時の違いはありません。
        <br />
        ですが、ご注文が殺到している際はお時間をいただく場合がございます。
      </FaqQ>
      <FaqF>サイン会のCDは破棄してもらえますか？</FaqF>
      <FaqQ>破棄も可能です。</FaqQ>
    </FaqContainer>
  );
}

export default Faq;

const FaqContainer = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 60%;
`;

const FaqTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const FaqF = styled.div`
  background-color: #d2f3f8;
  color: blueviolet;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 600;
  padding: 5px;
`;

const FaqQ = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  padding-left: 10px;
`;
