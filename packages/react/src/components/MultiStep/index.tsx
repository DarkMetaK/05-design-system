import { Label, MultiStepContainer, Step } from './styles'

export interface MultiStepProps {
  size: number
  currentIndex?: number
}

export function MultiStep({ size, currentIndex = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentIndex && currentIndex} de {size}
      </Label>
      <div>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} className={step === currentIndex ? 'active' : ''} />
        ))}
      </div>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
