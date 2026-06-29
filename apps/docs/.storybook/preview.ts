import type { Preview } from '@storybook/react'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Tokens', ['Colors', 'Typography', 'Border Radius'], 'Components', ['Button', 'Input', 'Select', 'Checkbox', 'Toggle', 'Badge', 'Card', 'Dialog', 'Tooltip', 'DropdownMenu', 'Table', 'Textarea', 'Alert', 'Toast', 'BarChart', 'LineChart', 'PieChart', 'DonutChart']],
      },
    },
  },
}

export default preview
