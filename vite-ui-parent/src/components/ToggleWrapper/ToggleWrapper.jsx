import {Toggle} from 'sapphire-ui-toggle';

export default function ToggleWrapper() {
  return (
    <div className="page">
      <div className="card">
        <div className="toggle-container">
        <Toggle size="md"/>
        <Toggle size="lg"/>
        </div>
      </div>
    </div>
  )
}
