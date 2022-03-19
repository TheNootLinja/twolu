import Thumbnail from "./Thumbnail"

const RequestedVideos = ({results}) => {
  return (
    <div>
      {results.map(result => {
        return <Thumbnail key={result.id} result={result}/>
      })}
    </div>
  )
}

export default RequestedVideos