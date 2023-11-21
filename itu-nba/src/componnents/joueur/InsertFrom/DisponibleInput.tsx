import { CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, Text, VStack } from "@gluestack-ui/themed";

export default function DisponibleInput() {
    return (
        <FormControl isRequired>
            <VStack>
                <Text>Disponibilite : </Text>
                <Checkbox value={""}>
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                </Checkbox>
            </VStack>
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