import MyComponent from "../../../../slices/Quote";

export default {
  title: "slices/Quote",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "quote",
      items: [],
      primary: {
        quote: [
          {
            type: "paragraph",
            text: "Do in nostrud consequat laboris aliqua. Adipisicing ullamco id adipisicing in. Lorem non commodo eu sit exercitation ullamco elit enim ipsum magna.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
);
_Default.storyName = "Default";
