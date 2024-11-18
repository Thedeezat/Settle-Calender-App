import React, { createContext, useContext, useState, ReactNode } from "react";

interface EventContextProps {
  isEventClose: boolean;
  setIsEventClose: (value: boolean) => void;
}

const EventContext = createContext<EventContextProps>({
  isEventClose: false,
  setIsEventClose: () => {},
});

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [isEventClose, setIsEventClose] = useState<boolean>(false);

  return (
    <EventContext.Provider value={{ isEventClose, setIsEventClose }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
