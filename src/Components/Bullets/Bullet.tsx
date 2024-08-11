import {IBullet} from "../../Modals/IBullet";
export default function Bullet({ X, Y }: IBullet) {

    return (
        <>
            <div className="bullet"
            style={{
                left: X,
                top: Y
            }}
            >
                {X}
            </div>

        </>
    );
}