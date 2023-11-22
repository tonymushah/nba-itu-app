import { CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, Text, HStack } from "@gluestack-ui/themed";

export default function DisponibleInput() {
    return (
        <FormControl isRequired>
            <HStack>
                <Text>Disponibilite : </Text>
                <Checkbox value={""} aria-label="Disponibilite">
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                </Checkbox>
            </HStack>
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