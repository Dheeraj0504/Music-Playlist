import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`
export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  margin-bottom: 25px;
`

export const MusicTrackImage = styled.img`
  height: 100px;
  width: 150px;
  margin-right: 20px;
`
export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
`
