import './App.css';
import {
    useState,
    useEffect,
} from 'react';

import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const DATA = {"@graph":[{"@id": "/expressions/ENCFF970BIN/ENSG00000115138.10/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens lung tissue female adult (30 years)", "@id": "/experiments/ENCSR917YHC/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 1.97, "fpkm": 2.44, "gene_id": "ENSG00000115138.10"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO424HVB/"], "@id": "/files/ENCFF970BIN/"}, "gene": {"symbol": "POMC", "name": "proopiomelanocortin", "title": "POMC (Homo sapiens)"}},{"@id": "/expressions/ENCFF630ELO/ENSG00000115138.10/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens right lung tissue female embryo (105 days)", "@id": "/experiments/ENCSR560MDQ/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 1.13, "fpkm": 0.67, "gene_id": "ENSG00000115138.10"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "right lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO766MZV/"], "@id": "/files/ENCFF630ELO/"}, "gene": {"symbol": "POMC", "name": "proopiomelanocortin", "title": "POMC (Homo sapiens)"}},{"@id": "/expressions/ENCFF906UNV/ENSG00000115138.10/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens lung tissue male child (3 years)", "@id": "/experiments/ENCSR278UYN/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "male"}}}]}, "expression": {"tpm": 3.71, "fpkm": 3.02, "gene_id": "ENSG00000115138.10"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO478OMA/"], "@id": "/files/ENCFF906UNV/"}, "gene": {"symbol": "POMC", "name": "proopiomelanocortin", "title": "POMC (Homo sapiens)"}},{"@id": "/expressions/ENCFF101DDW/ENSG00000146648.17/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens right lung tissue female embryo (98 days)", "@id": "/experiments/ENCSR074APH/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 35.34, "fpkm": 19.81, "gene_id": "ENSG00000146648.17"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "right lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO837QWL/"], "@id": "/files/ENCFF101DDW/"}, "gene": {"symbol": "EGFR", "name": "epidermal growth factor receptor", "title": "EGFR (Homo sapiens)"}},{"@id": "/expressions/ENCFF769NWX/ENSG00000146648.17/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens lung tissue female adult (30 years)", "@id": "/experiments/ENCSR129KCJ/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}, {"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 4.21, "fpkm": 3.9, "gene_id": "ENSG00000146648.17"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO449QPH/"], "@id": "/files/ENCFF769NWX/"}, "gene": {"symbol": "EGFR", "name": "epidermal growth factor receptor", "title": "EGFR (Homo sapiens)"}},{"@id": "/expressions/ENCFF117ELC/ENSG00000100393.12/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens left lung tissue female embryo (108 days)", "@id": "/experiments/ENCSR861SOG/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 56.51, "fpkm": 32.03, "gene_id": "ENSG00000100393.12"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "left lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO012PVK/"], "@id": "/files/ENCFF117ELC/"}, "gene": {"symbol": "EP300", "name": "E1A binding protein p300", "title": "EP300 (Homo sapiens)"}}]};


const GENES = [{"@id": "/genes/106481116/", "@type": ["Gene", "Item"], "title": "RN7SL709P (Homo sapiens)"},{"@id": "/genes/106480611/", "@type": ["Gene", "Item"], "title": "RNU6-815P (Homo sapiens)"},{"@id": "/genes/140679/", "@type": ["Gene", "Item"], "title": "SLC32A1 (Homo sapiens)"},{"@id": "/genes/8314/", "@type": ["Gene", "Item"], "title": "BAP1 (Homo sapiens)"},{"@id": "/genes/100337591/", "@type": ["Gene", "Item"], "title": "SNORA70F (Homo sapiens)"},{"@id": "/genes/79441/", "@type": ["Gene", "Item"], "title": "HAUS3 (Homo sapiens)"},{"@id": "/genes/1346/", "@type": ["Gene", "Item"], "title": "COX7A1 (Homo sapiens)"},{"@id": "/genes/389180/", "@type": ["Gene", "Item"], "title": "HTR3C2P (Homo sapiens)"},{"@id": "/genes/378484/", "@type": ["Gene", "Item"], "title": "MRX82 (Homo sapiens)"},{"@id": "/genes/392307/", "@type": ["Gene", "Item"], "title": "FAM221B (Homo sapiens)"},{"@id": "/genes/10690/", "@type": ["Gene", "Item"], "title": "FUT9 (Homo sapiens)"},{"@id": "/genes/26826/", "@type": ["Gene", "Item"], "title": "RNU6-6P (Homo sapiens)"},{"@id": "/genes/83872/", "@type": ["Gene", "Item"], "title": "HMCN1 (Homo sapiens)"},{"@id": "/genes/3653/", "@type": ["Gene", "Item"], "title": "IPW (Homo sapiens)"},{"@id": "/genes/442231/", "@type": ["Gene", "Item"], "title": "GAPDHP63 (Homo sapiens)"},{"@id": "/genes/9427/", "@type": ["Gene", "Item"], "title": "ECEL1 (Homo sapiens)"},{"@id": "/genes/23636/", "@type": ["Gene", "Item"], "title": "NUP62 (Homo sapiens)"},{"@id": "/genes/106481314/", "@type": ["Gene", "Item"], "title": "RNU6-431P (Homo sapiens)"},{"@id": "/genes/102465528/", "@type": ["Gene", "Item"], "title": "MIR6877 (Homo sapiens)"},{"@id": "/genes/388406/", "@type": ["Gene", "Item"], "title": "LINC01999 (Homo sapiens)"},{"@id": "/genes/23478/", "@type": ["Gene", "Item"], "title": "SEC11A (Homo sapiens)"},{"@id": "/genes/23605/", "@type": ["Gene", "Item"], "title": "HMGN2P9 (Homo sapiens)"},{"@id": "/genes/83695/", "@type": ["Gene", "Item"], "title": "RHNO1 (Homo sapiens)"},{"@id": "/genes/100189092/", "@type": ["Gene", "Item"], "title": "TRA-AGC7-1 (Homo sapiens)"},{"@id": "/genes/114184/", "@type": ["Gene", "Item"], "title": "SIGLEC18P (Homo sapiens)"}, {"@id": "/genes/5443/", "@type": ["Gene", "Item"], "title": "POMC (Homo sapiens)"}];


const URL = 'https://rnaget.api.encodedcc.org/expressions/EXPID007/bytes?format=json';


const fetchURL = (url) => (
    fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).then(
        (response) => (response.ok ? response.json() : {'@graph': []})
    )
);


const COLUMNS = [
    {field: 'id', headerName: 'ID', flex: 1.5},
    {field: 'assayTitle', headerName: 'Assay title', flex: 1},
    {field: 'geneSymbol', headerName: 'Gene Symbol', flex: 0.5},
    {field: 'summary', headerName: 'Biosample summary', flex: 2},
    {field: 'tpm', headerName: 'TPM', flex: 0.5},
    
];


const makeRows = (data) => (
    data.map(
        (datum) => (
            {
                'id': datum['@id'] + datum.expression.gene_id,
                'assayTitle': datum.file.assay_title,
                'geneSymbol': datum.gene.symbol,
                'summary': datum.dataset.biosample_summary,
                'tpm': datum.expression.tpm,
            }
        )
    )
);


const Tags = () => {
  return (
      <Stack spacing={3} sx={{ width: 500, marginBottom: 10 }}>
        <Autocomplete
            multiple
            id="tags-outlined"
            options={GENES}
            getOptionLabel={(option) => option.title}
            defaultValue={[GENES[25]]}
            filterSelectedOptions
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search genes"
                />
            )}
        />
    </Stack>
  );
};


const App = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => (
            fetchURL(URL).then(
                (results) => setData(results['@graph']),
            )
        ),
        []
    );
    return (
        <div className="App">
            <header className="App-header">
                <Tags/>
                <div style={{ height: 400, width: '80%' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid columns={COLUMNS} rows={makeRows(data)} />
                    </div>
                </div>
            </div>
            </header>
        </div>
    );
};


export default App;
