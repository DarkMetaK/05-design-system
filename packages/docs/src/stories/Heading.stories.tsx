import { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@darkmetak-ignite-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: 'select',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos mudar isso com a propriedade `as`',
      },
    },
  },
}
