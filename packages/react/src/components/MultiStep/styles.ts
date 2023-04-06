import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {
  '& > div': {
    marginTop: '$1',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '$2',
  },
})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Step = styled('span', {
  height: '$1',
  background: '$gray600',
  borderRadius: '$px',
  flex: 1,

  '&.active': {
    background: '$gray100',
  },
})
