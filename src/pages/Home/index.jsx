import React from "react";
// import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

import "./Home.scss";
import Message from "../../components/Message";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar="https://pp.userapi.com/c836724/v836724063/3d57a/hIBASadVPD0.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол ⚓"
        date="Thu Apr 25 2019 15:12:58"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
          }
        ]}
      />
      <Message
        avatar="https://sun1-30.userapi.com/c848532/v848532516/17c4df/wWpJ602CyT4.jpg?ava=1"
        text="Hi! Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. ⚓"
        date="Thu Apr 25 2019 15:00:58"
        isMe={true}
        isReaded={false}
      />
    </section>
  );
};

export default Home;
