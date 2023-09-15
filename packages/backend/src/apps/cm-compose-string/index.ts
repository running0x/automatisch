import defineApp from '../../helpers/define-app';

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
});
