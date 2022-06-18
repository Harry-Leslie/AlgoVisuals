import { useDispatch } from "react-redux"
import { append, pop,removeAll, addNoDRandom, addRandom} from "../../redux/slices/DataStructures"
import { useSelector } from 'react-redux'

export default function mainSettings() {
    const dispatch = useDispatch()
    return (
      <div>
        <h2>Settings</h2>
        <button>
          Change Colour
        </button>
        <button>
          Reset
        </button>
      </div>
    )
}
