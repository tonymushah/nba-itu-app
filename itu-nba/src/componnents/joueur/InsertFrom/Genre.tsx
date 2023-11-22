import { ChevronDownIcon as GlueStackChevronDownIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Icon, Input, InputField, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@gluestack-ui/themed";
import FeatherIcons from "@expo/vector-icons/Feather";
import { Platform } from "react-native";

function ChevronDownIcon() {
    if (Platform.OS !== "web") {
        return (
            <FeatherIcons name={"chevron-down"} />
        )
    } else {
        return (
            <GlueStackChevronDownIcon />
        );
    }

}

function GenreSelect() {
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
                    <SelectItem label="Homme" value="h" />
                    <SelectItem label="Femme" value="f" />
                </SelectContent>
            </SelectPortal>
        </Select>
    )
}

export default function GenreInput() {
    return (
        <FormControl isRequired>
            <FormControlLabel>
                <FormControlLabelText>
                    Genre
                </FormControlLabelText>
            </FormControlLabel>
            <GenreSelect />
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