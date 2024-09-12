import { createContext, useState} from "react";

export const TypeContext = createContext(null);

// Providerコンポーネントの作成

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    type: 'test'
  });

  return (
    <TypeContext.Provider value={{ formData, setFormData }}>
      {children}
    </TypeContext.Provider>
  );
};

//export default FormProvider;
