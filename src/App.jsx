import ProgressTracker from './components/ProgressTracker'
import personIcon from './assets/icons/personIcon.svg'
import schoolIcon from './assets/icons/schoolIcon.svg'
import workIcon from './assets/icons/workIcon.svg'
import previewIcon from './assets/icons/previewIcon.svg'
import './App.css'

const steps = [
	{'name': 'Contact', 'icon': personIcon},
	{'name': 'Education', 'icon': schoolIcon},
	{'name': 'Experience', 'icon': workIcon},
	{'name': 'Preview', 'icon': previewIcon},
]

function App() {
  return (
    <>
      <ProgressTracker steps={steps} />
    </>
  )
}

export default App