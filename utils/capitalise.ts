export default function capitalise(str: string) {
  return str?.charAt(0).toUpperCase() + str?.substring(1);
}
