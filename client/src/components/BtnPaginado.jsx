import './css/BtnPaginado.css';
import { useSelector } from 'react-redux';

export const BtnPaginado = ({changeP, page}) => {
    const currentPage = useSelector(store => store.page);
    return (
        <div className={'btnPaginate2 '+ (currentPage===page && 'btnPaginate3') } onClick={() => changeP(page)}>{page}</div>
    )
}