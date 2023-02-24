import { useSelector } from "react-redux";
import { selectAllCards } from "./cardsSlice";
import { Link } from "react-router-dom";

const CardsList = () => {
  const cards = useSelector(selectAllCards);

  const renderCards = cards.map((card) => (
    <Link className="linkTo" to={`/card/${card.id}`} key={card.id}>
      <li className="list__card" key={card.id}>
        <h3 className="list__card_title">{card.title}</h3>
        <p className="list__card_p">{card.content}</p>
        <p className="list__card_link">{card.linkText}</p>
      </li>
    </Link>
  ));

  return <ul className="list">{renderCards}</ul>;
};

export default CardsList;
