import * as React from "react";
const { useState } = React;
import { Center, Heading, Image } from "native-base";

<<<<<<< HEAD
import LogInForm from "../../components/auth/LogInForm";
import SignUpForm from "../../components/auth/SignUpForm";
import GradientProvider from "../../components/GradientProvider";
=======
import KeyboardSpacer from 'react-native-keyboard-spacer';
import LogInForm from '../../components/auth/LogInForm';
import SignUpForm from '../../components/auth/SignUpForm';
import GradientProvider from '../../components/GradientProvider';
>>>>>>> profileStyle

type Props = {
  setUser: (user: User | null) => void;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <GradientProvider>
      <Center h="full" w="full">
        <Heading mt="90px" mb="-60px">
          <Image
            source={require("../../assets/usher_icon.png")}
            alt="Usher icon"
            size="xl"
            width="300px"
          />
        </Heading>
        {isNewUser ? (
          <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser} />
        ) : (
          <LogInForm setUser={setUser} setIsNewUser={setIsNewUser} />
        )}
      </Center>
      <KeyboardSpacer />
    </GradientProvider>
  );
};

export default Auth;
