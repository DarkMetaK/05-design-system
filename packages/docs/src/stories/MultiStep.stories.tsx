import { StoryObj, Meta } from '@storybook/react'
import { MultiStep, MultiStepProps, Box } from '@darkmetak-ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentIndex: 1,
  },
  argTypes: {
    size: {
      control: {
        type: 'number',
        min: 1,
        max: 30,
      },
    },
    currentIndex: {
      control: {
        type: 'number',
        min: 1,
        max: 30,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&>div': {
              width: '100%',
            },
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}
