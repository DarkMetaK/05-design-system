import { StoryObj, Meta } from '@storybook/react'
import { Box, CheckBox, CheckBoxProps, Text } from '@darkmetak-ignite-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}

export const Checked: StoryObj<CheckBoxProps> = {
  args: {
    checked: true,
  },
}
