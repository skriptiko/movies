import { ResourceTypes } from "@/utils/queries/types";

type Props = { type: ResourceTypes.MOVIES };

export function getQueryKey(props: Props) {
  switch (props.type) {
    case ResourceTypes.MOVIES: {
      return [ResourceTypes.MOVIES];
    }
  }
}
