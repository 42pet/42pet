import styled from "styled-components";
import useRightSectionHandler from "@/hooks/useRightSectionHandler";
import { useSetRecoilState, useRecoilState } from "recoil";
import { IBoardInfo } from "@/types/interface/board.interface";
import BoardPhotoBox from "@/components/Board/BoardPhotoBox";
import OptionButton from "@/components/OptionButton";
import useModal from "@/hooks/useModal";
import { ModalType } from "@/types/enum/modal.enum";
import { languageState } from "@/recoil/atom";
import { currentBoardIdState } from "@/recoil/atom";

const BoardTemplate = (board: IBoardInfo) => {
  const {
    boardId,
    memberId,
    memberName,
    intraName,
    profileImageURL,
    country,
    images,
    categories,
    reactionCount,
    commentCount,
    isScrapped,
    isReacted,
    content,
    previewCommentUser,
    previewComment,
    createdAt,
  } = board;

  const [language] = useRecoilState<any>(languageState);
  const setCurrentBoardId = useSetRecoilState<number | null>(
    currentBoardIdState
  );
  const { openCommentSection } = useRightSectionHandler();
  const { openModal } = useModal();

  const handleCommentClick = (boardId: number) => {
    openCommentSection();
    setCurrentBoardId(boardId);
  };
  const handleOpenProfile = () => {
    openModal(ModalType.PROFILECARD); // PROFILECARD -> 바꿔야 돼 다시
  };

  return (
    <>
      <BoardWrapperStyled>
        <BoardHeaderStyled>
          <BoardProfileStyled onClick={handleOpenProfile}>
            <img src={profileImageURL} />
            <div>{memberName} 🇰🇷</div>
          </BoardProfileStyled>
          <BoardOptionButtonStyled>
            <OptionButton boardId={boardId} memberName={memberName} />
          </BoardOptionButtonStyled>
        </BoardHeaderStyled>
        <BoardBodyStyled>
          <BoardPhotoBox boardImages={images} />
          <ButtonZoneStyled>
            <LikeCommentContainerStyled>
              {isReacted ? (
                <img src="/src/assets/likeR.png" />
              ) : (
                <img src="/src/assets/like.png" />
              )}

              <img
                src="/src/assets/comment.png"
                onClick={() => handleCommentClick(boardId)}
              />
            </LikeCommentContainerStyled>
            <ScrapButtonStyled>
              {isScrapped ? (
                <img src="/src/assets/scrapB.png" />
              ) : (
                <img src="/src/assets/scrap.png" />
              )}
            </ScrapButtonStyled>
          </ButtonZoneStyled>
          <BoardContentContainerStyled>
            <DivOne>
              <div>
                {reactionCount} {language.like}, {commentCount}{" "}
                {language.comment}
              </div>
              <span>{createdAt}</span>
            </DivOne>
            <DivTwo>{content}</DivTwo>
            <DivThree>
              <div onClick={handleOpenProfile}>{previewCommentUser}</div>
              <div>{previewComment}</div>
              <div onClick={() => handleCommentClick(1)}>
                {language.moreComments}
              </div>
            </DivThree>
          </BoardContentContainerStyled>
        </BoardBodyStyled>
      </BoardWrapperStyled>
    </>
  );
};

const BoardWrapperStyled = styled.div`
  width: 93%;
  margin-top: 3%;
  margin-bottom: 5%;
  border-radius: 25px;
  padding-bottom: 10%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
`;

const BoardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: var(--transparent);
`;

const BoardProfileStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6%;
  width: 40%;
  img {
    cursor: pointer;
    width: 20%;
    border-radius: 100%;
  }
  div {
    cursor: pointer;
    margin-left: 5%;
    font-size: 1.3rem;
    color: var(--white);
  }
`;

const BoardOptionButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 9%;
  border: none;
  margin-right: 3%;
  &:focus {
    opacity: 0.6;
  }
`;

const BoardBodyStyled = styled.div`
  height: 98.2%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: var(--white);
`;

const ButtonZoneStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  height: 5%;
`;

const LikeCommentContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 33.3%;
  img:nth-child(1) {
    margin-left: 15%;
  }
  img {
    cursor: pointer;
    margin-left: 7%;
    width: 22px;
  }
  img:hover {
    opacity: 0.5;
  }
`;

const ScrapButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 33.3%;
  img {
    cursor: pointer;
    width: 22px;
    margin-right: 15%;
  }
  img:hover {
    opacity: 0.5;
  }
`;

const BoardContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 14%;
  margin-top: 1.5%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 1%;
  font-size: 13px;
`;

const DivOne = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 100%;
  font-weight: bold;
  span {
    font-weight: 400;
    font-size: 11px;
  }
`;

const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  font-size: 100%;
`;

const DivThree = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  font-size: 100%;
  div:nth-child(1) {
    cursor: pointer;
    margin-right: 1%;
    font-weight: bold;
  }
  div:nth-child(3) {
    cursor: pointer;
    margin-left: 2%;
    color: var(--lightgrey);
  }
`;

export default BoardTemplate;
