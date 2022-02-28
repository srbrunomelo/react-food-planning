import { CategoryItemType } from "./type"
import { Wrapper, Label } from './styled'
import { Icon } from "../../../../components"
import { useTheme } from "styled-components"
import { useFilters } from "../../../../context/filters/useFilters"

export const CategoryItem = ({ id, label, icon }: CategoryItemType) => {
  const { state, updateFilters } = useFilters()

  const { colors, textColor } = useTheme()
  const isActive = state.categoryId === id

  return (
    <Wrapper onClick={() => updateFilters({ ...state, categoryId: id  })} active={isActive}>
      <Icon name={icon} color={isActive ? colors.primary : textColor.caption } />
      <Label className="d-none d-md-block" active={isActive}>{label}</Label>
    </Wrapper>
  )
}