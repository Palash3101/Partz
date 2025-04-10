SELECT
    motherboard.id, `name`, price, rating, `socket`, chipset, form_factor,
    GROUP_CONCAT(DISTINCT CONCAT(memory_amount, 'x', ddr_generation, ' ', max_amount, ' GB')) AS mem_slots_gen_amt,
    GROUP_CONCAT(DISTINCT CONCAT(pcie_generation, '_', amount, '_', slot_type) SEPARATOR ', ') AS pcie_gen_amt_type,
    GROUP_CONCAT(DISTINCT CONCAT(ports_type, '_', ports_amount) SEPARATOR ', ') AS ports_type_amt,
    GROUP_CONCAT(DISTINCT CONCAT(storage_generation, '_', storage_amount, '_', storage_type) SEPARATOR ', ') AS storage_gen_amt_type
FROM
    `PCI-e_lookup`, motherboard, products, ports_lookup, memory_lookup, storage_lookup
WHERE
    motherboard.id = products.id AND
    motherboard.id = memory_lookup.motherboard_id AND
    motherboard.id = storage_lookup.motherboard_id AND
    motherboard.id = `PCI-e_lookup`.motherboard_id AND
    motherboard.id = ports_lookup.motherboard_id
GROUP BY
    motherboard.id;