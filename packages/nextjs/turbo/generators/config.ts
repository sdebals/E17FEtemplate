import type { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI) {
  console.log('👋in nextjs!');
  plop.setWelcomeMessage('👋 Welcome to your new Turbo generator!');
  plop.setGenerator('route-handler', {
    description: 'Adds a new route handler',
    prompts: [
      {
        type: 'list',
        name: 'method',
        message: 'Select the method of the route handler:',
        choices: ['GET', 'POST', 'PUT', 'DELETE']
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
        path: '../../apps/web/app/api/{{dashCase name}}/route.ts',
        templateFile: 'templates/routehandler.hbs'
      },
      '✅ Successfully created Route Handler.',
      'Done! 🎉'
    ]
  });
}
