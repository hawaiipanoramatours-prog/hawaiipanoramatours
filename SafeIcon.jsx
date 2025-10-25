export default function SafeIcon({ icon: Icon, className }){
  if (!Icon) return null
  return <Icon className={className} />
}
