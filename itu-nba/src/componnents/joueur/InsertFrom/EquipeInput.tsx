import { ChevronDownIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Icon, Input, InputField, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@gluestack-ui/themed";

function EquipeSelect() {
    return (
        <Select>
            <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon mr="$3">
                    <Icon as={ChevronDownIcon} />
                </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Equipe 1" value="1" />
                    <SelectItem label="Equipe 2" value="2" />
                </SelectContent>
            </SelectPortal>
        </Select>
    )
}

export default function EquipeInput() {
    return (
        <FormControl isRequired>
            <FormControlLabel>
                <FormControlLabelText>
                    Equipe
                </FormControlLabelText>
            </FormControlLabel>
            <EquipeSelect />
            <FormControlHelper>
                <FormControlHelperText />
            </FormControlHelper>
            <FormControlError>
                <FormControlErrorIcon />
                <FormControlErrorText />
            </FormControlError>
        </FormControl>
    );
}