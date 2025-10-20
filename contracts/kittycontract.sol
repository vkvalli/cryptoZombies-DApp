pragma solidity ^0.4.25;

contract KittyContract {
    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint64 cooldownEndBlock;
        uint32 matronId;
        uint32 sireId;
        uint16 generation;
    }

    Kitty[] public kitties;

    function createKitty(uint256 _genes, uint16 _generation) public {
        Kitty memory newKitty = Kitty({
            genes: _genes,
            birthTime: uint64(now),
            cooldownEndBlock: 0,
            matronId: 0,
            sireId: 0,
            generation: _generation
        });
        kitties.push(newKitty);
    }

    function getKitty(uint256 _id)
        external
        view
        returns (
            bool isGestating,
            bool isReady,
            uint256 cooldownIndex,
            uint256 nextActionAt,
            uint256 siringWithId,
            uint256 birthTime,
            uint256 matronId,
            uint256 sireId,
            uint256 generation,
            uint256 genes
        )
    {
        Kitty storage kitty = kitties[_id];
        // Return dummy values for unused fields to match interface
        return (
            false,
            true,
            0,
            0,
            0,
            kitty.birthTime,
            kitty.matronId,
            kitty.sireId,
            kitty.generation,
            kitty.genes
        );
    }
}
