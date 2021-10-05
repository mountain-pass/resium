import { CylinderGraphics as CesiumCylinderGraphics } from "cesium";
import { PickCesiumProps, Merge } from "../core";
export declare type CylinderGraphicsCesiumProps = PickCesiumProps<Merge<CesiumCylinderGraphics, CesiumCylinderGraphics.ConstructorOptions>, typeof cesiumProps>;
export declare type CylinderCesiumEvents = {
    onDefinitionChange?: () => void;
};
export declare type CylinderGraphicsProps = CylinderGraphicsCesiumProps & CylinderCesiumEvents;
declare const cesiumProps: readonly ["heightReference", "length", "topRadius", "bottomRadius", "show", "fill", "material", "outline", "outlineColor", "outlineWidth", "numberOfVerticalLines", "slices", "shadowMode", "distanceDisplayCondition", "shadows"];
export declare const cesiumEventProps: {
    readonly onDefinitionChange: "definitionChanged";
};
declare const CylinderGraphics: import("../core").CesiumComponentType<CesiumCylinderGraphics, CylinderGraphicsProps>;
export default CylinderGraphics;
