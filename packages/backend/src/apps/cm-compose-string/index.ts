import defineApp from '../../helpers/define-app';
import actions from './actions';

// Function to remove the first half of a string
function removeFirstHalf(input: string): string {
    const halfLength = Math.floor(input.length / 2);
    return input.substring(halfLength);
}

// App definition
export default defineApp({
 name: 'Citymatch Compose String',
 key: 'cm-Compose-String',
 iconUrl: '{BASE_URL}/apps/stringProcessor/assets/favicon.svg',
 supportsConnections: false,
 primaryColor: '000000',
 actions: actions,
 arguments: [
    {
      label: 'String',
      key: 'string',
      type: 'string' as const,
      required: true,
      description: 'The string you want to compose.',
      variables: true,
    },
],
});
