import {useDispatch, useSelector} from "react-redux";
import NamesView from "../NamesViewComponents";
import {delete_dragon} from "../../Actions/dragonsActions-type";

const DragonList = () => {
  const { dragonList } = useSelector(state=>state.dragonReducer);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(delete_dragon(e))
  }
  if(dragonList.length > 0)
    return (
        <div className={" bg-secondary bg-gradient rounded-3 text-white"}>
          <h6 className={"p-2"}>Liste des Dragons</h6>
          {dragonList.map( (drag, i) =>
              <NamesView key={i} name={drag} handle={() => handleClick(drag)}/>
          )}
        </div>
    )
  return (
      <p className={'text-muted fst-italic'}>Désole Mais pas de dragon pour le moment</p>
  )
}
export default DragonList;