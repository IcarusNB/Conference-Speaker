

function SpeakerAdd ({ eventYear, insertRecord }) {
    return (
      <a href="#" className="addSes">
        <i onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("Enter First and Last name:", "")
          const firstLastArray = firstLast.split(' ')
          insertRecord({
            id:"99999",
            first: firstLastArray[0],
            last: firstLastArray[1],
            bio: "Bio not entered yet",
            sessions: [
              {
                id: "88888",
                title: `New session for ${firstLastArray[0]}`,
                room: {
                  name: "Main Ball Room"
                },
                eventYear
              }
            ]
          })
        }}>
          +
        </i>
      </a>
    )
}

export default SpeakerAdd