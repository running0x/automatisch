function removeFirstHalf(input: string): string {
    const halfLength = Math.floor(input.length / 2);
    return input.substring(halfLength);
}

export default removeFirstHalf;