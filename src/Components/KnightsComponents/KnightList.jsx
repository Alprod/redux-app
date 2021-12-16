import {useDispatch, useSelector} from "react-redux";
import NamesView from "../NamesViewComponents";
import {delete_knight} from "../../Actions/knightActions-type";

const KnightList = () => {
  const { knightList } = useSelector(state=>state.knightReducer);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(delete_knight(e))
  }
  if(knightList.length > 0)
    return (
        <div className={'bg-dark bg-gradient rounded-3 text-white my-3'}>
          <h6 className={'p-2'}>Liste des Chevaliers</h6>
          {knightList.map( (k, i) =>
              <NamesView key={i} name={k} handle={() => handleClick(k)}/>
          )}
        </div>
    )
  return (
      <p className={'text-muted fst-italic'}>Désole Mais pas de chevalier pour le moment</p>
  )
}
export default KnightList;