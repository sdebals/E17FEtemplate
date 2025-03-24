import type { PlopTypes } from '@turbo/gen';
import { getComponentsList } from './utils';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI) {
  console.log('👋in uI!');
  plop.setWelcomeMessage('👋 Welcome to your new Turbo generator!');
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'list',
        name: 'group',
        message: 'Select the group of the component:',
        choices: () => getComponentsList()
      },
      {
        type: 'confirm',
        name: 'isClient',
        message: 'Is it a React Client Component?',
        default: false
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{dashCase group}}/{{dashCase name}}.tsx',
        templateFile: 'templates/component.hbs'
      },
      '✅ Successfully created UI Component.',
      {
        type: 'add',
        path: '../../apps/storybook/stories/{{dashCase name}}.stories.tsx',
        templateFile: 'templates/storybook.hbs'
      },
      '✅ Successfully created Storybook story.',
      {
        type: 'append',
        path: 'package.json',
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{dashCase name}}": "./src/{{dashCase group}}/{{dashCase name}}.tsx",'
      },
      'Done! 🎉 Now run `pnpm run storybook` to start developing your component.'
    ]
  });
}
