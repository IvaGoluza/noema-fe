export interface SelectedLeaf {
  coreName: string
  coreColor: string
  secondaryName: string
  tertiaryName: string
  intensity: number
}

export function leafKey(leaf: Pick<SelectedLeaf, 'coreName' | 'secondaryName' | 'tertiaryName'>) {
  return `${leaf.coreName}::${leaf.secondaryName}::${leaf.tertiaryName}`
}
