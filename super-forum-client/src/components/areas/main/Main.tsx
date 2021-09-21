import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useParams } from "react-router";
import ThreadCard from "./ThreadCard";
import { getThreadsByCategory } from "../../../services/DataService";
import Category from "../../../models/Category";

const Main = () => {
  const params = useParams();
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<Category | undefined>();
  const [threadCards, setThreadCards] = useState<Array<JSX.Element> | null>(null);

  console.log(params);

  useEffect(() => {
    console.log("main category id: ", categoryId);
    if (categoryId && Number(categoryId) > 0) {
      getThreadsByCategory(categoryId).then((threads) => {
        const cards = threads.map((th) => <ThreadCard key={`thread-${th.id}`} thread={th} />);
        if (!category) {
          setCategory(threads[0].category);
        }
        setThreadCards(cards);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]); //adding 'category' will trigger unnecesary double run of useEffect.

  return (
    <main className="content">
      <MainHeader category={category} />
      <div>{threadCards}</div>
    </main>
  );
};

export default Main;
