import { Box, Center, Text } from "@gluestack-ui/themed";
import NomInput from "./InsertFrom/NomInput";
import PrenomInput from "./InsertFrom/PrenomInput";
import DateNaissance from "./InsertFrom/DateNaissanceInput";
import GenreInput from "./InsertFrom/Genre";
import EquipeInput from "./InsertFrom/EquipeInput";
import DisponibleInput from "./InsertFrom/DisponibleInput";

export default function InsertFrom() {
    return (
        <Box>
            <Center>
                <Text>Joueur</Text>
            </Center>
            <NomInput />
            <PrenomInput />
            <DateNaissance />
            <GenreInput />
            <EquipeInput />
            <DisponibleInput />
        </Box>
    );
}
