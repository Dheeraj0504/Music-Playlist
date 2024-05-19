import {AiOutlineDelete} from 'react-icons/ai'
import {
  ListItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  // console.log(props)
  const {itemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = itemDetails

  const onClickDeleteBtn = () => {
    // console.log("Delete Btn Clicked")
    onClickDeleteTrack(id)
  }

  return (
    <ListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onClickDeleteBtn}
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationDeleteContainer>
    </ListItem>
  )
}
export default MusicItem
