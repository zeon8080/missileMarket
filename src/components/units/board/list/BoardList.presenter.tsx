import { IBoardListsUI } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import * as S from "./BoardList.styles";
import PaginationBasic from "../../../commons/pagination/Basic/paginationBasic.container";

export default function BoardListUI(props: IBoardListsUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.SearchBox>
          <input
            type="text"
            placeholder="검색"
            onChange={props.onChangeSearch}
          />
          <button onClick={props.onClickBoardWrite}>게시글 등록</button>
        </S.SearchBox>
        <S.ListMiddle>
          {props.data?.fetchBoards.map((el) => (
            <S.ListBox
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveBoardDetail}
            >
              <S.ListShort>{el.createdAt.slice(0, 10)}</S.ListShort>
              <S.ListLong>
                {el.title
                  .slice(0, 20)
                  .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                  .split("!@#")
                  .map((el: string) => (
                    <span
                      key={uuidv4()}
                      style={{
                        color: el === props.keyword ? "#003fff" : "",
                      }}
                    >
                      {el}
                    </span>
                  ))}
              </S.ListLong>
              <S.ListShort>{el.writer?.slice(0, 8)}</S.ListShort>
            </S.ListBox>
          ))}
        </S.ListMiddle>
        <S.ListsFooter>
          <PaginationBasic refetch={props.refetch} count={props.count} />
        </S.ListsFooter>
      </S.Wrapper>
    </S.Container>
  );
}
