export default function IsAuth(): boolean {
    return Boolean(window.localStorage.getItem('access'))
}